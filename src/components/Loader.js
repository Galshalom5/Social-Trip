import React from "react";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";

const override = css`
  display: block;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <SyncLoader
          css={override}
          size={16}
          color={"#5F9EA0"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
