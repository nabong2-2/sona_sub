//헤더
const headerScroll = document.querySelector('header');
console.log(headerScroll);
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        headerScroll.classList.add("header_small");
    } else if (window.scrollY == 0) {
        headerScroll.classList.remove("header_small");
    }
});

//헤더 hover
const depthParents = document.querySelectorAll('.b_left > li > a');
const depthHover = document.querySelectorAll('.depth_menu');
// 요소들을 한 번에 가져오는 것이라 개별 li와 자동으로 매칭되지 않
const depthWrap = document.querySelectorAll('.b_left > li'); // li 전체
depthWrap.forEach((li, index) => {
    const depthMenu = li.querySelector('.depth_menu'); 
    // 해당 li 내부의 depth_menu 찾기
    // 각 li 내부에서 .depth_menu를 직접 찾음
    li.addEventListener('mouseenter', () =>{
        depthMenu.style.display = 'block';
    });

    li.addEventListener('mouseleave', () =>{
        depthMenu.style.display = 'none';
    });
});

// 커서를 갖다 대면 작은 사진이 큰 사진으로 바뀌게 하기

const mainImage = document.querySelector('.top_image img');
const smallImage = document.querySelectorAll('.b_wrap a');
console.log(mainImage, smallImage)

smallImage.forEach((img, index) => {
    img.addEventListener('mouseover', ()=> {
        mainImage.src = `./images/big${index + 1}.jpg`;
    });
});