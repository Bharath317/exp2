class Example extends Phaser.Scene
{
    graphics;
    path;
    follower;

    create ()
    {
        this.graphics = this.add.graphics();

        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };

        this.path = new Phaser.Curves.Path();

        this.path.add(new Phaser.Curves.Ellipse(400, 300, 100));

        this.tweens.add({
            targets: this.follower,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 4000,
            yoyo: true,
            repeat: -1
        });
    }

    update ()
    {
        this.graphics.clear();
        this.graphics.lineStyle(2, 0xffffff, 1);

        this.path.draw(this.graphics);

        this.path.getPoint(this.follower.t, this.follower.vec);

        this.graphics.fillStyle(0xff0000, 1);
        this.graphics.fillCircle(this.follower.vec.x, this.follower.vec.y, 12);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
