import React, { useState } from "react";
import image02 from "../../img/image02.png";
export default function Jobs() {  
  const width = document.body.clientWidth;
    return(
    <div id="Jobs">
      <h2>
        <span>&ldquo;사람과 함께, { width < 952 && <br />} 제주를 이롭게&rdquo;</span><br />
        이웰과 함께 새로운 발전 문화를 만들어 갈 { width > 952 && <br />}      
        인재를 찾고 있습니다.        
      </h2>
      { width > 952 ? 
      <img src={image02} className="jobs-img" alt="image" />
      :
       <div className="jobs-img-box">
         <img src={image02} className="jobs-img" alt="image" />
         </div>
      }     
      <a href= "https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=VVRBY3ZlQ0VNcXJKbGNXV3YwRnFFUT09" 
         target={"_blank"} 
         title="(주)이웰 채용소식 바로가기">
        <div className="job-btn">
          (주)이웰 채용 소식
        </div>
      </a>
      <a href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=SEFlaEQ3alRDR2RqaUVEOGpnTkMrZz09"
         target={"_blank"}
         title="(주)이웰에너지 채용소식 바로가기" >
        <div className="job-btn">
          (주)이웰에너지 채용 소식
        </div>
      </a>
    </div>
    );
}