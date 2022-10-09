import {defineComponent, onBeforeMount, onMounted, ref, toRef, toRefs, watch, watchEffect,defineEmits} from "vue";
import "./main.scss";

const isOpen = ref(false);
export function openCard(){
    isOpen.value = true;
}
export function closeCard(){
    isOpen.value = false;
}
export default defineComponent({
    name:"fanboxCard",
    props:{
        image: String,
        show: Boolean,
    },
    setup(props,ctx){

        const {show} = toRefs(props);
        isOpen.value = show.value;
        watch(show,()=>{
            isOpen.value = show.value;
        })

        onMounted(()=>{
            if (!props.image) throw new Error("image参数是必须传入的");

            loadingImageAndDrawImage();

            new GradeTwoImage();
            new GradeThreeImage();

            bindDom();
        })

        const hidden = ():void=>{
            isOpen.value = false;
        }

        const mainCardBox = ref<HTMLImageElement>();

        const mainShadowImage = ref<HTMLCanvasElement>();
        const mainShadowImageBox = ref<HTMLCanvasElement>();
        // top image
        async function loadingImageAndDrawImage(){
            const new2dImg = mainShadowImage.value?.getContext('2d')

            if (!new2dImg) throw new Error("无法获取到装载dom");

            const mainImage:HTMLImageElement = new Image();
            mainImage.src = String(props.image);
            mainImage.onload =  await function (){
                new2dImg.drawImage(mainImage,0,0,1280,800);
            }
            return true;
        }


        function bindDom(){
            //image 1
            const gradeTwoImage = new GradeTwoImage();
            //image 2
            const gradeThreeImage = new GradeThreeImage();

            const cardMainBoxDom = mainCardBox.value;
            if (!cardMainBoxDom) throw new Error("无法获取到装载dom")
            const coreX = cardMainBoxDom.offsetWidth/2;
            const coreY = cardMainBoxDom.offsetHeight/2;
            cardMainBoxDom.addEventListener("mousemove",(event)=>{
                const x = (event.clientX-coreX)/coreX;
                const y = (event.clientY-coreY)/coreY;
                if (!mainShadowImageBox.value) throw new Error("无法获取到装载dom");
                mainShadowImageBox.value.style.transform = `perspective(${x+1600}px) rotateX(${y*21}deg) rotateY(${(x*18)>0?-(x*18):Math.abs(x*18)}deg) `;

                gradeTwoImage.restDraw(x,y);
                gradeThreeImage.restDraw(x,y);
            })

        }

        //grade two image
        const  GradeTwoImageDom = ref<HTMLCanvasElement>()
        class GradeTwoImage{
             private img = new Image();
             private img2 = new Image();
             private cnv = GradeTwoImageDom.value;
             private readonly cnw;
            constructor() {
                if (this.cnv)
                    this.cnw=this.cnv.getContext('2d')
                this.restDraw(0,0);

            }
            public restDraw(x:number,y:number) {

                const tempCanvas = document.createElement('canvas'); // Storage canvas
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = 1280;
                tempCanvas.height = 800; // 设置宽高

                if (this.cnw)
                this.cnw.globalCompositeOperation = "source-over"

                this.img.src = require("./images/color-y.png") //颜色
                this.img.onload =  async () =>{
                   if (tempCtx){
                       await tempCtx.drawImage(this.img, -800 + x * 600, -800 + y * 600, 6280, 3800);
                       tempCtx.globalCompositeOperation = "destination-in";
                       this.img2.src = require("./images/mosaic-1.png") //格子
                       this.img2.onload = ()=> {
                           tempCtx.drawImage(this.img2, 0, 0, 1280, 800);
                           if (this.cnw&&this.cnv){
                               this.cnw.clearRect(0, 0, this.cnv.width, this.cnv.height);
                               this.cnw.drawImage(tempCanvas, 0, 0);
                           }
                       }
                   }
                }
            }

        }

        //grade three image
        const GradeThreeImageDom = ref<HTMLCanvasElement>()
        class GradeThreeImage{
            private img = new Image();
            private img2 = new Image();
            private cnw2 = GradeThreeImageDom.value?.getContext('2d');
            constructor(){
                this.restDraw(0,0);
            }
            restDraw(x:number,y:number){
                const tempCanvas = document.createElement('canvas'); // Storage canvas
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = 1280; tempCanvas.height = 800; // 设置宽高

                if (this.cnw2)
                    this.cnw2.globalCompositeOperation = "source-over"

                this.img.src = require("./images/color-x.png") //颜色
                this.img.onload = async () =>{
                   if(tempCtx&&this.cnw2){
                       await tempCtx.drawImage(this.img, -800 + x * 600, -800 + y * 600, 6280, 3800);
                       tempCtx.globalCompositeOperation = "destination-in";
                       this.img2.src = require("./images/mosaic-2.png") //格子
                       this.img2.onload =()=>{
                           tempCtx.drawImage(this.img2,0, 0,1280,800);
                           if (GradeThreeImageDom.value&&this.cnw2){
                               this.cnw2.clearRect(0,0,GradeThreeImageDom.value.width,GradeThreeImageDom.value.height);
                               this.cnw2.drawImage(tempCanvas,0,0);
                           }
                       }
                   }
                }
            }

        }


        return ()=>(
        <div class = "main-shadow"
             ref={mainCardBox}
             id = "CardMainBox"
             onClick={()=>hidden()}
             style={{visibility:isOpen.value?"initial":"hidden"}}>
            <div id = "main-shadow-image" ref={mainShadowImageBox} style = "transform: perspective(1600px) rotateX(0deg) rotateY(0deg);">
                <canvas width = "1280" ref={mainShadowImage} height = "800" class = "main-shadow-image" id = "mainShadowImage"></canvas>
                <canvas width = "1280" ref={GradeTwoImageDom} height = "800" id = "mainShadowBackground-1"></canvas>
                <canvas width = "1280" ref={GradeThreeImageDom} height = "800" id = "mainShadowBackground"></canvas>
            </div>
        </div>
        );
    }
})