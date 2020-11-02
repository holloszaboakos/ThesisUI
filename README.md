# ThesisUI

A React UI for the map and graphs of my thesis

Framer:

Frame:
height: number, "number%", "numberfr"
width: number, "number%", "numberfr"
size: number, "number%", "numberfr"
from in pixel: top=number, right=number, bottom=number, left=number
center: x(horizontal), y(vertical), nothing(both)
position: relative v. absolute

background: "#RRGGBB" v. {{ src: "https://example.com/logo.png"}}
image: "https://source.unsplash.com/random"
border="1px solid #09F"
shadow="10px 5px 5px black"
visible: true v. false
opacity: number (between 0 and 1)
overflow: hidden v. visible

style: {{ mixBlendMode: "difference" }}

initial={{scale: number size: number ...}}
animate={{scale: number size: number ...}}
exit={{scale: number size: number ...}}

translate:
-x:{number}
-y:{number}
-z:{number}
rotate:{number}
-rotateX: {number}
-rotateY: {number}
-rotateV: {number}
scale:{1.2}
-scaleX:{1.2}
-scaleY:{1.2}
-scaleZ:{1.2}
skew:{number}
-skewX:{number}
-skewY:{number}
-skewZ:{number}
origin:
-originX:{number}
-originY:{number}
-originZ:{number}
perspective:{number}
preserve3d:true v. false
backfaceVisible:true v. false

className: "pretty"
events: onClick, onMouseOut, onTouchUp, ...
-tap: whileTap, onTap, onTapStart, onTapCancel,
-hower: whileHower, onHowerStart, onHoverEnd,
-pan: onPan, onPanStart, onPanEnd
-drag: onDrag, onDragStart, onDragEnd, onDirectionLock

drag: true false, "x", "y"

// Text contents will be centered

<Frame>Hello</Frame>
// Text contents will not be centered
<Frame><span>Hello</span></Frame>

Page:
alignment: end, start, center
animateCurrentPageUpdate: true, false
contentHeight: auto, strech
contentOffsetX: {20}
contentOffsetY: {20}
contentWidth: auto, strech
currentPage: 0,1,2,3,4,5 ...
defaultEffect: none, cube, coverflow, wheel, pile,
direction: vertical, horizontal
gap: number
momentum
wheelEnabled: true, false
padding: number
-paddingTop: number
-paddingRight: number
-paddingBottom: number
-paddingLeft: number
events: onChangePage

Scroll:
dragEnabled: true, false
wheelEnabled: true, false
direction: vertical, horizontal
contentOffsetX: {20}
contentOffsetY: {20}
events: onScroll, onScrollStart, onScrollEnd,

Stack:
height: number, "number%", "numberfr"
width: number, "number%", "numberfr"
background: "#RRGGBB" v. {{ src: "https://example.com/logo.png"}}
initial={{scale: number size: number ...}}
animate={{scale: number size: number ...}}
exit={{scale: number size: number ...}}
gap: number
alignment: end, start, center
radius: "number%" v. {number}
padding: number
-paddingTop: number
-paddingRight: number
-paddingBottom: number
-paddingLeft: number
direction: vertical, horizontal
distribution: end, start, center, space-around, space-between, space-evenly
