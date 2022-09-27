import { GlowParticle } from './glowParticle.js';

const COLORS = [
    {r: 147, g: 173, b: 233},
    {r: 133, g: 204, b: 244},
    {r: 151, g: 221, b: 183},
    {r: 255, g: 243, b: 194},
    {r: 254, g: 236, b: 208},
    {r: 246, g: 189, b: 181},
    {r: 235, g: 170, b: 186},
    {r: 175, g: 127, b: 223},
    {r: 144, g: 90, b: 233}
];

export class Canvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.wrapper = document.getElementById('wrapper');
        this.container = document.querySelector('.container');

        this.wrapper.appendChild(this.canvas)
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 40;
        this.particles = [];
        this.maxRadius = 190;
        this.minRadius = 140;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = this.container.clientWidth;
        this.stageHeight = this.container.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        console.log(this.container.clientHeight);
        this.ctx.globalCompositeOperation = 'saturation';

        this.createParticles();
    };

    createParticles() {
        let curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );

            if (++curColor >= COLORS.length ) {
                curColor = 0
            };

            this.particles[i] = item;
        }
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    };


};
