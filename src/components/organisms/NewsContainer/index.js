import React from "react";
import NewsCard from '../../molecules/NewsCard';
import NavigationLink from "../../molecules/NavigationLink";


const NewsContainer = ({newsArray,nextPageQuery,subUrl,indexStart,isNextPage,type}) => {
  let renderNews =
    Array.isArray(newsArray) &&
    newsArray.map((item, index) => {
      return <NewsCard index = {indexStart + (index + 1)} key={index} subUrl={`${subUrl}/${item}.json`} type={type}/>  
    });

  return (
    <table>
      <tbody>
        <tr style={{ height: 10 }} />
        {renderNews}
        {isNextPage && (
          <tr>
            <td>
              <NavigationLink fontColor="gray" link={nextPageQuery} label="More"/>
            </td>
          </tr>
        )}
        <tr style={{ height: 10 }} />
      </tbody>
    </table>
  );
};

export default NewsContainer;
