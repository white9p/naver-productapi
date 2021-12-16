/* global kakao */
import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
//두개의 위치 등록하기
const listData = [
  { lat: 37.50068360834707, lng:127.03721496931352},
  { lat: 37.50197818726197, lng:127.0370675822486}
]
const MapTest = () => {
  
  useEffect(()=>{
    const mapConatiner = document.getElementById("map"),
    mapOption = {
      //위도 경도를 나타내는 함수
        center: new window.kakao.maps.LatLng(
          37.50068360834707, 
          127.03721496931352
        ), 
        level: 3,//숫자가 높을수록 맵이 광범위해짐 
      };
        const map = new window.kakao.maps.Map(mapConatiner, mapOption)
        //marker 등록하기
        // var marker = new window.kakao.maps.Marker({
        //   map: map,
        //   position: new window.kakao.maps.LatLng(
        //     37.50068360834707, 
        //     127.03721496931352
        //   )
        // })

        //marker 여러개 등록하기
        for(var i=0; i<listData.length; i++) {
          var data =listData[i]
          var marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(
              data.lat,
              data.lng
            )
          })
        }
  },[])
  return (
    <Container
      id="map"
      style={{width:"100%", height:"500px", margin:"100px auto"}}>      
    </Container>
  );
};

export default MapTest;