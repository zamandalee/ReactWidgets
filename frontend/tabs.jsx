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


class Headers extends React.Component {
  render() {
    const selectedIdx = this.props.selectedIdx;

    const headers = this.props.content.map( (tabObj, idx) => {
      const className = (idx === this.props.selectedIdx) ? 'active' : '';

      return (
        <li key={idx}
            className={className}
            onClick={() => this.props.selectTab(idx)}>
            {tabObj.title}
        </li>
      );
    });

    return (
      <ul className="headers-ul">
        {headers}
      </ul>
    );
  }
}
