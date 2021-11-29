import './curtain.scss'

function Curtain(){
function slide() {
	document.getElementsByClassName("curtainContainer")[0].style.transform =
		"translatex(-150vw) ";
	document.getElementsByClassName("curtainContainer")[1].style.transform =
		"translatex(150vw)";
}

return (
    <>
    <div className="w-full h-10">
    <div class="content"><img src="https://images.unsplash.com/photo-1558970439-add78fc68990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1179&q=80"></img>
</div>
<div className="curtainBody w-20 overflow-hidden">
	<div id="leftCurtain" class="curtainContainer">
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
	</div>
	<div id="rightCurtain" class="curtainContainer">
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
		<div class="unCurtain"></div>
	</div>
	
</div>
    </div>
    </>
)
}

export default Curtain;