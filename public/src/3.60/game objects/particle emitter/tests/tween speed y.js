class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('crate', 'assets/sprites/crate32.png');
    }

    create ()
    {
        const particles = this.add.particles('crate');

        const emitter = particles.createEmitter({
            x: 200,
            y: 300,
            speedY: 200,
            lifespan: 2000,
            alpha: { start: 1, end: 0 }
        });

        this.tweens.add({
            targets: emitter,
            x: 600,
            speedY: -200,
            duration: 1500,
            ease: 'sine.inout',
            yoyo: true,
            repeat: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
