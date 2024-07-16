function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./images/0369.png
       ./images/0370.png
       ./images/0371.png
       ./images/0372.png
       ./images/0373.png
       ./images/0374.png
       ./images/0375.png
        ./images/0376.png
        ./images/0377.png
        ./images/0378.png
        ./images/0379.png
        ./images/0380.png
        ./images/0381.png
        ./images/0382.png
        ./images/0383.png
        ./images/0384.png
        ./images/0385.png
        ./images/0386.png
        ./images/0387.png
        ./images/0388.png
        ./images/0389.png
        ./images/0390.png
        ./images/0391.png
        ./images/0392.png
        ./images/0393.png
        ./images/0394.png
        ./images/0395.png
        ./images/0396.png
        ./images/0397.png
        ./images/0398.png
        ./images/0399.png
        ./images/0400.png
        ./images/0401.png
        ./images/0402.png
        ./images/0403.png
        ./images/0404.png
        ./images/0405.png
        ./images/0406.png
        ./images/0407.png
        ./images/0408.png
        ./images/0409.png
        ./images/0410.png
        ./images/0411.png
        ./images/0412.png
        ./images/0413.png
        ./images/0414.png
        ./images/0415.png
        ./images/0416.png
        ./images/0417.png
        ./images/0418.png
        ./images/0419.png
        ./images/0420.png
        ./images/0421.png
        ./images/0422.png
        ./images/0423.png
        ./images/0424.png
        ./images/0425.png
        ./images/0426.png
        ./images/0427.png
        ./images/0428.png
        ./images/0429.png
        ./images/0430.png
        ./images/0431.png
        ./images/0432.png
        ./images/0433.png
        ./images/0434.png
        ./images/0435.png
        ./images/0436.png
        ./images/0437.png
        ./images/0438.png
        ./images/0439.png
        ./images/0440.png
        ./images/0441.png
        ./images/0442.png
        ./images/0443.png
        ./images/0444.png
        ./images/0445.png
        ./images/0446.png
        ./images/0447.png
        ./images/0448.png
        ./images/0449.png
        ./images/0450.png
        ./images/0451.png
        ./images/0452.png
        ./images/0453.png
        ./images/0454.png
        ./images/0455.png
        ./images/0456.png
        ./images/0457.png
        ./images/0458.png
        ./images/0459.png
        ./images/0460.png
        ./images/0461.png
        ./images/0462.png
        ./images/0463.png
        ./images/0464.png
        ./images/0465.png
        ./images/0466.png
        ./images/0467.png
        ./images/0468.png
        ./images/0469.png
        ./male0001.png
        ./male0002.png
        ./male0003.png
        ./male0004.png
        ./male0005.png
        ./male0006.png
        ./male0007.png
        ./male0008.png
        ./male0009.png
        ./male0010.png
        ./male0011.png
        ./male0012.png
        ./male0013.png
        ./male0014.png
        ./male0015.png
        ./male0016.png
        ./male0017.png
        ./male0018.png
        ./male0019.png
        ./male0020.png
        ./male0021.png
        ./male0022.png
        ./male0023.png
        ./male0024.png
        ./male0025.png
        ./male0026.png
        ./male0027.png
        ./male0028.png
        ./male0029.png
        ./male0030.png
        ./male0031.png
        ./male0032.png
        ./male0033.png  
        ./male0034.png
        ./male0035.png
        ./male0036.png
        ./male0037.png
        ./male0038.png
        ./male0039.png
        ./male0040.png
        ./male0041.png
        ./male0042.png
        ./male0043.png
        ./male0044.png
        ./male0045.png
        ./male0046.png
        ./male0047.png
        ./male0048.png
        ./male0049.png
        ./male0050.png
        ./male0051.png
        ./male0052.png
        ./male0053.png
        ./male0054.png
        ./male0055.png
        ./male0056.png
        ./male0057.png
        ./male0058.png
        ./male0059.png
        ./male0060.png
        ./male0061.png
        ./male0062.png
        ./male0063.png
        ./male0064.png
        ./male0065.png
        ./male0066.png
        ./male0067.png
        ./male0068.png
        ./male0069.png
        ./male0070.png
        ./male0071.png
        ./male0072.png
        ./male0073.png
        ./male0074.png
        ./male0075.png
        ./male0076.png
        ./male0077.png      
        ./male0078.png
        ./male0079.png
        ./male0080.png
        ./male0081.png
        ./male0082.png
        ./male0083.png
        ./male0084.png
        ./male0085.png
        ./male0086.png
        ./male0087.png
        ./male0088.png
        ./male0089.png
        ./male0090.png
        ./male0091.png
        ./male0092.png
        ./male0093.png
        ./male0094.png
        ./male0095.png
        ./male0096.png
        ./male0097.png
        ./male0098.png
        ./male0099.png
        ./male0100.png
        ./male0101.png
        ./male0102.png
        ./male0103.png
        ./male0104.png
        ./male0105.png
        ./male0106.png
        ./male0107.png
        ./male0108.png
        ./male0109.png
        ./male0110.png
        ./male0111.png
        ./male0112.png
        ./male0113.png
        ./male0114.png
        ./male0115.png
        ./male0116.png
        ./male0117.png
        ./male0118.png
        ./male0119.png
        ./male0120.png
        ./male0121.png
        ./male0122.png
        ./male0123.png
        ./male0124.png
        ./male0125.png
        ./male0126.png
        ./male0127.png
        ./male0128.png
        ./male0129.png
        ./male0130.png
        ./male0131.png
        ./male0132.png
        ./male0133.png
        ./male0134.png
        ./male0135.png
        ./male0136.png
        ./male0137.png
        ./male0138.png
        ./male0139.png
        ./male0140.png
        ./male0141.png
        ./male0142.png
        ./male0143.png
        ./male0144.png
        ./male0145.png
        ./male0146.png
        ./male0147.png
        ./male0148.png
        ./male0149.png
        ./male0150.png
        ./male0151.png
        ./male0152.png
        ./male0153.png
        ./male0154.png
        ./male0155.png
        ./male0156.png
        ./male0157.png
        ./male0158.png
        ./male0159.png
        ./male0160.png      
        ./male0161.png
        ./male0162.png
        ./male0163.png
        ./male0164.png
        ./male0165.png
        ./male0166.png
        ./male0167.png
        ./male0168.png
        ./male0169.png
        ./male0170.png
        ./male0171.png
        ./male0172.png
        ./male0173.png
        ./male0174.png
        ./male0175.png
        ./male0176.png
        ./male0177.png
        ./male0178.png
        ./male0179.png
        ./male0180.png
        ./male0181.png
        ./male0182.png
        ./male0183.png
        ./male0184.png
        ./male0185.png
        ./male0186.png
        ./male0187.png
        ./male0188.png
        ./male0189.png
        ./male0190.png
        ./male0191.png
        ./male0192.png
        ./male0193.png
        ./male0194.png
        ./male0195.png
        ./male0196.png
        ./male0197.png
        ./male0198.png
        ./male0199.png
        ./male0200.png
        ./male0201.png
        ./male0202.png

   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })