class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.script('fractals', 'assets/loader-tests/fractals.js');
    }

    create ()
    {
        const texture = this.textures.createCanvas('julia', 800, 600);

        //  These functions are all loaded in the fractals.js script file

        // drawMandelbrot(texture.canvas, texture.context, 64);
        // drawBurningShipFractal(texture.canvas, texture.context, 64);
        drawJulia(texture.canvas, texture.context, 100);

        //  Call this if running under WebGL, or you'll see nothing change
        texture.refresh();

        this.add.image(400, 300, 'julia');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000',
    scene: Example
};

const game = new Phaser.Game(config);
