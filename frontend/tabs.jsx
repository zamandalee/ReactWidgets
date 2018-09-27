import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedIdx: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(idx) {
    this.setState({ selectedIdx: idx });
  }

  render() {
    const tab = this.props.content[this.state.selectedIdx];

    return (
      <div className="tabs widget">
        <h1>Tabs</h1>

        <div className="tabs-content">
          <Headers content={this.props.content}
                   selectedIdx={this.state.selectedIdx}
                   selectTab={this.selectTab}/>
          <article>{tab.content}</article>
        </div>
      </div>
    );
  }

}

export default Tabs;
