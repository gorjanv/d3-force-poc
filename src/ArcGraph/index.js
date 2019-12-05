import React from "react";
import { number } from "prop-types";
import * as d3 from "d3";

class ArcGraph extends React.Component {
  componentDidMount() {
    const colors = {
      main: "#064C86",
      seconday: "#337EA8",
      tertiary: "#90B0CB",
      stroke: "#0F5A83"
    };

    var svg = d3
      .select(this.svg)
      .attr("width", 300)
      .attr("height", 300)
      .append("g")
      .attr("transform", "translate(200,200)");

    svg
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(60)
          .outerRadius(100)
          .startAngle(0) // It's in radian, so Pi = 3.14 = bottom.
          .endAngle(-3.14 / 2) // 2*Pi = 6.28 = top
      )
      .attr("stroke", "black")
      .attr("fill", "#69b3a2");
  }

  render() {
    return <svg ref={el => (this.svg = el)} />;
  }
}

ArcGraph.propTypes = {
  width: number.isRequired,
  height: number.isRequired
};

ArcGraph.defaultProps = {
  width: 1000,
  height: 1000
};

export default ArcGraph;
