class Example extends Phaser.Scene
{
    imageData = 'data:image/png;base64,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';

    create ()
    {
        this.textures.once('addtexture-brain', () =>
        {
            this.add.image(400, 300, 'brain');
        });

        this.textures.once('onerror', () =>
        {
            console.log('error decoding base64');
        });

        this.textures.once('onload', () =>
        {
            console.log('base64 image loaded');
        });

        this.textures.addBase64('brain', this.imageData);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
