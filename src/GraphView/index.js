import React from "react";
import { number } from "prop-types";
import * as d3 from "d3";
import data from "./data";

class ForceDirectedGraph extends React.Component {
  componentDidMount() {
    const colors = {
      main: "#064C86",
      seconday: "#337EA8",
      tertiary: "#90B0CB",
      stroke: "#0F5A83"
    };

    const getNodeColor = node => {
      if (node.primary) return colors.main;
      if (node.secondary) return colors.seconday;
      return colors.tertiary;
    };

    const getNodeRadius = node => {
      if (node.primary) return 100;
      if (node.secondary) return 80;
      return 60;
    };

    // the connected nodes should be calculated on mouseover
    let connectedNodes = [];
    // this fn shoudl be called once on mouseover and then the result set in var which will be reused on mouseout
    // this way you don't calculate the connected nodes twice - on mouseover and mouseout
    const getConnectedNodes = (selectedNode, allNodes) => {
      const links = data.links;
      console.log("all nodes from moseover -> ", allNodes);

      const connectedLinks = links.filter(
        link =>
          link.source.id === selectedNode.id ||
          link.target.id === selectedNode.id
      );

      return connectedLinks.reduce(
        (acc, link) => {
          let connectedId;

          if (link.source.id !== selectedNode.id) {
            connectedId = link.source.id;
          } else {
            connectedId = link.target.id;
          }

          return [
            ...acc,
            allNodes.find(circle => circle.__data__.id === connectedId)
          ];
        },
        [allNodes.find(circle => circle.__data__.id === selectedNode.id)]
      );
    };

    const margin = { top: 10, right: 30, bottom: 30, left: 40 },
      width = 1000 - margin.left - margin.right,
      height = 1000 - margin.top - margin.bottom;

    const mouseoverHandler = function(d, a, b) {
      connectedNodes = getConnectedNodes(d, b);

      connectedNodes.forEach(node => {
        d3.select(`.text_${node.__data__.id}`).style("fill", "black");
      });

      d3.selectAll(connectedNodes)
        .transition()
        .duration(50)
        .style("fill", "white");

      d3.select(".tooltip")
        .transition()
        .duration(100)
        .style("opacity", 1);

      d3.select(".tooltip")
        .html(
          `<span>${d.id}</span><p>${d.additionalInfo ||
            "no additional data available for this node ..."}</p>`
        )
        .style("left", Math.max(0, d3.event.pageX - 150) + "px")
        .style("top", d3.event.pageY + 20 + "px");
    };

    const mouseleaveHandler = function(d, a, b) {
      b.forEach(node =>
        d3.select(`.text_${node.__data__.id}`).style("fill", "white")
      );
      d3.selectAll(b).style("fill", getNodeColor);
      d3.select(".tooltip").style("opacity", 0);
    };

    const dblclickHandler = (a, b, c, d) => {};

    const clickHandler = (a, b, c, d) => {
      d3.selectAll(".selected-node").remove();

      const parentElement = c[b].parentNode;
      const nodeRadius = getNodeRadius(a);

      d3.select(parentElement)
        .append("circle")
        .lower()
        .style("stroke", "white")
        .style("stroke-width", "5px")
        .style("fill", "rgba(144, 176, 203, 0.3)")
        .attr("r", nodeRadius)
        .transition()
        .duration(400)
        .attr("r", nodeRadius + 100)
        .transition()
        .duration(400)
        .attr("r", nodeRadius + 40)
        .attr("class", "selected-node");

      d3.select(parentElement)
        .append("circle")
        .lower()
        .style("stroke", "white")
        .style("fill", "rgba(144, 176, 203, 0.3)")
        .attr("r", nodeRadius + 80)
        .attr("class", "selected-node");
    };

    // append the svg object to the body of the page
    var svg = d3
      .select(this.svg)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .call(
        d3.zoom().on("zoom", function() {
          svg.attr("transform", d3.event.transform);
        })
      )
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Initialize the links
    var link = svg
      .selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .style("stroke", "#aaa")
      .style("stroke-width", 5)
      .style("cursor", "pointer");

    link
      .on("mouseover", (l, a, b) => {
        const hoveredLink = b.find(
          line =>
            line.__data__.source.id === l.source.id &&
            line.__data__.target.id === l.target.id
        );

        d3.select(hoveredLink)
          .transition()
          .duration(100)
          .style("stroke-width", 15)
          .transition()
          .duration(100)
          .style("stroke-width", 10)
          .style("stroke", "black");
      })
      .on("mouseleave", (l, a, b) =>
        d3
          .selectAll(b)
          .style("stroke", "#aaa")
          .style("stroke-width", 5)
      );

    var node = svg
      .append("g")
      .selectAll("g")
      .data(data.nodes)
      .join("svg")
      .attr("width", 80)
      .attr("height", 80)
      .attr("overflow", "visible");

    node
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(60)
          .outerRadius(100)
          .startAngle(5) // It's in radian, so Pi = 3.14 = bottom.
          .endAngle(6.28) // 2*Pi = 6.28 = top
      )
      .attr("stroke", "black")
      .attr("fill", "#69b3a2");

    node
      .append("circle")
      .style("fill", getNodeColor)
      .style("stroke", "#064C86")
      .style("stroke-width", 3)
      // .on("mousemove", mousemoveHandler)
      .on("mouseleave", mouseleaveHandler)
      .on("mouseover", mouseoverHandler)
      .on("click", clickHandler)
      .on("dblclick", dblclickHandler)
      .attr("r", getNodeRadius);

    node
      .append("text")
      .attr("class", d => `text_${d.id}`)
      .text(d => d.id)
      .style("fill", "white")
      .style("text-transform", "uppercase")
      .style("font-size", d => {
        if (d.main && d.selected) return "32px";
        else if (d.main) return "24px";
        else return "18px";
      })
      .style("font-family", "Roboto")
      .attr("x", -40)
      .attr("y", -20);
    //TODO: see how to center and wrap the text .style("text-align", "center");

    // Let's list the force we wanna apply on the network
    var simulation = d3
      .forceSimulation(data.nodes) // Force algorithm is applied to data.nodes
      .force(
        "link",
        d3
          .forceLink() // This force provides links between nodes
          .distance((a, b, c) => {
            // const ret = a.source.group === a.target.group ? 200 : 1000;
            // console.log(`Current node: ${JSON.stringify(a)}; Distance: ${ret}`);
            return a.source.group === a.target.group ? 300 : 800;
          })
          .id(function(d) {
            return d.id;
          }) // This provide  the id of a node
          .links(data.links) // and this the list of links
      )

      // .force(
      //   "charge",
      //   d3
      //     .forceManyBody()
      //     .strength((a, b, c) => {
      //       return 100;
      //       // return a.group === c[b].group ? -30 : -400;
      //     }) // This adds repulsion between nodes. Play with the -400 for the repulsion strength
      //     .distanceMin(200)
      //     .distanceMax(200)
      // )

      .force("center", d3.forceCenter(width / 2, height / 2)) // This force attracts nodes to the center of the svg area
      .force(
        "colide",
        d3
          .forceCollide(50)
          .radius(65)
          .strength(60)
      )
      // .force(
      //   "x",
      //   d3
      //     .forceX()
      //     .strength(0.1)
      //     .x(function(d) {
      //       return d.group * 100;
      //     })
      // )
      // .force("y", d3.forceY().strength(0.1))
      .on("end", ticked);

    // This function is run at each iteration of the force algorithm, updating the nodes position.
    function ticked() {
      link
        .attr("x1", function(d) {
          return d.source.x;
        })
        .attr("y1", function(d) {
          return d.source.y;
        })
        .attr("x2", function(d) {
          return d.target.x;
        })
        .attr("y2", function(d) {
          return d.target.y;
        });

      node
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
    }

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("x", d => d.x).attr("y", d => d.y);
    });
  }

  render() {
    return (
      <>
        <div style={{ border: "5px solid red" }}>
          <svg ref={el => (this.svg = el)} />
        </div>
        <div className="company_details"></div>
        <div
          style={{
            opacity: 0,
            position: "absolute",
            border: "3px solid #8e8e8e",
            borderRadius: "5px",
            backgroundColor: "#f2f2f2",
            width: "200px",
            height: "100px",
            display: "flex",
            flexDirection: "column",
            fontSize: "16px",
            fontFamily: "Roboto",
            color: "#545454",
            padding: "20px"
          }}
          className="tooltip"
        >
          this be the hover popup
        </div>
      </>
    );
  }
}

ForceDirectedGraph.propTypes = {
  width: number.isRequired,
  height: number.isRequired
};

ForceDirectedGraph.defaultProps = {
  width: 1000,
  height: 1000
};

export default ForceDirectedGraph;
