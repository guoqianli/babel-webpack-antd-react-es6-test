import React, { Component } from 'react';
import { Tag } from 'antd';
import sites from '../../../utils/site.js';

const CheckableTag = Tag.CheckableTag;

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSite: { id: -1, name: '全国' },
      selectedCitys: [{ id: -1, name: '全国' }]
    };
  }

  // 选择省份
  handleSiteChange(site) {
    this.setState({ selectedSite: site });
  }

  // 选择城市
  handleCityChange(city) {
    const { selectedCitys } = this.state;

    if (city.id == -1) {
      selectedCitys.splice(0, selectedCitys.length);
      selectedCitys.length == 0 && selectedCitys.push(city);
      this.setState({ selectedCitys });
    } else {
      selectedCitys.length == 0 && selectedCitys.push(city);
      selectedCitys.filter(selectedCity => selectedCity.id == city.id).length == 0 && selectedCitys.push(city);
      const filterNational = selectedCitys.filter(selectedCity => selectedCity.id != -1);
      this.setState({ selectedCitys: filterNational });
    }
  }

  // 删除选择的城市
  handleClose(e, id) {
    const { selectedCitys } = this.state;
    e.preventDefault();
    const newSelectedCitys = selectedCitys.filter(selectedCity => selectedCity.id != id);
    !newSelectedCitys.length ?
      this.setState({ selectedCitys: [{ id: -1, name: '全国' }] })
    :
      this.setState({ selectedCitys: newSelectedCitys });
  }

  render() {
    const { selectedSite: { city, id }, selectedCitys } = this.state;

    return (
      <div>
        <div style={{ border: '1px solid #ccc' }}>
          <Tag style={{ border: 0, background: '#fff' }} key="-1" onClick={() => this.handleSiteChange({ id: -1, name: '全国' })}>全国</Tag>
          {sites.map(site => (
            <CheckableTag
              key={site.id}
              onChange={() => this.handleSiteChange(site)}
            >
              {site.name}
            </CheckableTag>
          ))}
        </div>
        <div style={{ border: '1px solid #ccc', borderTop: 0 }}>
          {id == -1 ?
            <Tag style={{ border: 0, background: '#fff' }} key="-1" onClick={() => this.handleCityChange({ id: -1, name: '全国' })}>全国</Tag>
          :
           city && city.map(ct => (
             <CheckableTag
               key={ct.id}
               onChange={() => this.handleCityChange(ct)}
             >
               {ct.name}
             </CheckableTag>
          ))}
        </div>
        {/*全国不能被删除*/}
        <div style={{ border: '1px solid #ccc', borderTop: 0, paddingLeft: 4 }}>
          {selectedCitys.map(selectedCity => (
            selectedCity.id == -1 ?
              <Tag color="#108ee9" key={selectedCity.id}>{selectedCity.name}</Tag>
            :
              <Tag color="#108ee9" closable key={selectedCity.id} onClose={(e) => this.handleClose(e, selectedCity.id)}>{selectedCity.name}</Tag>
          ))}
        </div>
      </div>
    );
  }
}

export default City;
