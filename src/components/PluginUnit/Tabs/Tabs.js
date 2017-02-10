import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import style from './tabs.scss';
import TabNav from './TabNav';
import TabContent from './TabContent';
import { width } from '../common/width';

class Tabs extends Component {
  static propTypes = {
    // 在主节点上增加可选class
    className: PropTypes.string,
    // class 前缀
    classPrefix: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    // 默认激活索引，组件内更新
    defaultActiveIndex: PropTypes.number,
    // 默认激活索引，组件外更新
    activeIndex: PropTypes.number,
    // 切换时回调函数
    onChange: PropTypes.func,
  };

  static defaultProps = {
    classPrefix: 'tabs',
    onChange: () => {},
  };

  constructor(props) {
    super(props);

    // 对事件方法的绑定
    this.handleTabClick = this.handleTabClick.bind(this);

    const currProps = this.props;
console.log(currProps)
    let activeIndex;
    // 初始化activeIndex state
    if ('activeIndex' in currProps) {
      activeIndex = currProps.activeIndex;
    } else if ('defaultActiveIndex' in currProps) {
      activeIndex = currProps.defaultActiveIndex;
    }

    this.state = {
      activeIndex,
      prevIndex: activeIndex,
    };
  }

  componentDidMount() {
    // 获取真正的DOM元素
    const dom = ReactDOM.findDOMNode(this);
    console.log(dom);

    // 获取DOM元素的宽度
    console.log(width(dom));
  }

  componentWillReciveProps(nextProps) {
    // 如果 props 传入 activeIndex，则直接更新
    if ('activeIndex' in nextProps) {
      this.setState({
        activeIndex: nextProps.activeIndex,
      });
    }
  }

  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex;

    // 如果当前 activeIndex 与传入的 activeIndex 不一致
    // 并且 props 中存在 defaultActiveIndex 时，则更新
    if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
      this.setState({
        activeIndex,
        prevIndex,
      });

      // 更新后执行回调函数，抛出当前索引和上一次索引
      this.props.onChange({ activeIndex, prevIndex });
    }
  }

  renderTabNav() {
    const { classPrefix, children } = this.props;

    return (
      <TabNav
        key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    );
  }

  renderTabContent() {
    const { classPrefix, children } = this.props;

    return (
      <TabContent
        key="tabContent"
        classPrefix={classPrefix}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    );
  }

  render() {
    const { className } = this.props;
    // classnames用于合并class
    const classes = classnames(className, 'ui-tabs');

    return (
      <div className={classes}>
        {this.renderTabNav()}
        {this.renderTabContent()}
      </div>
    );
  }
}

export default Tabs;

