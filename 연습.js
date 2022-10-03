//로그인 모달창
document.querySelector('#login').addEventListener('click', function(){
    
    document.querySelector('.black-bg').classList.add('show-modal');

})

document.querySelector('.btn-danger').addEventListener('click', function(){
    
    document.querySelector('.black-bg').classList.remove('show-modal');

})

document.querySelector('.black-bg').addEventListener('click', function(e){

  /* e.target; // 유저가 실제로 누른것
  e.currentTarget; this; // 이벤트리스너 달린 곳
  e.preventDefault(); // 이벤트 기본동작 막아줌
  e.stopPropagation(); // 상위요소로 퍼지는 이벤트 버블링 막아줌*/

  if (e.target == document.querySelector('.black-bg')){
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
 
})



//네비게이션 토글바
document.querySelector('.navbar-toggler').addEventListener('click', function(){
    
    document.querySelector('.list-group').classList.toggle('show');
    
})

//로그인 유효성 검사
document.querySelector('form').addEventListener('submit', function(e){

    let 입력한값 = document.querySelector('#email').value;
    let 입력한비번 = document.querySelector('#password').value;

    if(입력한값 == ''){
        alert('id입력안함 입력해주세요!')
        e.preventDefault();
    } else if(입력한비번 == ''){
        alert('비번입력안함 입력해주세요!')
        e.preventDefault();
    } else if(입력한비번.length < 6){
        alert('비번 6자리이상 입력해주세요!')
        e.preventDefault();
    }

});

document.querySelector('#email').addEventListener('input', function(){
    

})

//다크모드
var count = 0;

document.querySelector('.badge').addEventListener('click', function(){

    count = count + 1;

    if (count % 2 == 1){
        document.querySelector('.badge').innerHTML ='Dark 🔄';
    } else {
        document.querySelector('.badge').innerHTML ='Light 🔄';
    }

    document.querySelector('body').classList.toggle('dark');

})


//5초광고
var count = 5;


setInterval(function(){
  count -= 1;

  if(count >= 0){
    document.querySelector('#countdown').innerHTML = count;
    
  }

  if (count < 0){
    document.querySelector('.alert').style.display = 'none';
  }


}, 1000);





//슬라이드
document.querySelector('.slide-1').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = 'translateX(0vw)'
})

document.querySelector('.slide-2').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = 'translateX(-100vw)'
})

document.querySelector('.slide-3').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = 'translateX(-200vw)'
})


//스크롤
window.addEventListener('scroll', function(){
    if (window.scrollY > 100){
        document.querySelector('.navbar-brand').style.fontSize = '20px';
    } else {
      document.querySelector('.navbar-brand').style.fontSize = '30px';
    }
})

document.querySelector('.lorem').addEventListener('scroll', function(){
  var 스크롤양 = document.querySelector('.lorem').scrollTop; //scrollTop : 스크롤 얼마나 했는지
  var 실제높이 = document.querySelector('.lorem').scrollHeight; //scrollHeight : 실제높이
  var 높이 = document.querySelector('.lorem').clientHeight;

  if( 스크롤양 + 높이 > 실제높이 - 10){
    alert('다읽음');
  }
})



//탭기능

/*for (let i = 0; i < document.querySelectorAll('.tab-button').length; i++){
  document.querySelectorAll('.tab-button')[i].addEventListener('click', function(){
      document.querySelectorAll('.tab-button')[0].classList.remove('orange');
      document.querySelectorAll('.tab-button')[1].classList.remove('orange');
      document.querySelectorAll('.tab-button')[2].classList.remove('orange');
      document.querySelectorAll('.tab-button')[i].classList.add('orange');
      document.querySelectorAll('.tab-content')[0].classList.remove('show');
      document.querySelectorAll('.tab-content')[1].classList.remove('show');
      document.querySelectorAll('.tab-content')[2].classList.remove('show');
      document.querySelectorAll('.tab-content')[i].classList.add('show');
  })
} */

function 탭열기(blank){
  document.querySelectorAll('.tab-button')[0].classList.remove('orange');
  document.querySelectorAll('.tab-button')[1].classList.remove('orange');
  document.querySelectorAll('.tab-button')[2].classList.remove('orange');
  document.querySelectorAll('.tab-button')[blank].classList.add('orange');
  document.querySelectorAll('.tab-content')[0].classList.remove('show');
  document.querySelectorAll('.tab-content')[1].classList.remove('show');
  document.querySelectorAll('.tab-content')[2].classList.remove('show');
  document.querySelectorAll('.tab-content')[blank].classList.add('show');
}

document.querySelector('.list').addEventListener('click', function(e){
  if(e.target == document.querySelectorAll('.tab-button')[0]){
    탭열기(0);
  } else if (e.target == document.querySelectorAll('.tab-button')[1]){
    탭열기(1);
  }  else if (e.target == document.querySelectorAll('.tab-button')[2]){
    탭열기(2);
  }
})


var car = ['소나타', 50000, 'white'];
var car2 = {name : '소나타', price : [50000, 3000, 4000]}

document.querySelector('.product').innerHTML = car2['name'];
document.querySelector('.price').innerHTML = car2.price[1];

