import { setupSortJobItem,renderSortJobItem } from "../../commonRender";
import { createDOM } from './index';
import { createOtherLink } from '../../utils';

// 智联招聘首次打开页面时是服务端渲染，没法监听接口，但是 html 中保存了列表数据
export default function firstOpen(data) {
    const dom = document.querySelector('.positionlist');
    setupSortJobItem(dom);
    const children = dom?.children;
    const { positionList = [] } = data;
    if(!children || !positionList || positionList.lenth === 0) return;

    positionList.forEach((item, index) => {
        const {
            firstPublishTime,
            companyName,
        }  = item;
        const dom = children?.[index];
        if(!dom) return;
        
        let tag = createDOM(firstPublishTime, companyName); 
        dom.appendChild(createOtherLink(companyName));

        dom.appendChild(tag);
    });
    renderSortJobItem(positionList,(index)=>{
        return children?.[index];
    }, 'firstPublishTime')
}