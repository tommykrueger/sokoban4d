import THREE from 'three.js';

import Utils from '../../app/utils';
import Item from '../item';

export default class Wall extends Item {


	constructor (options = {}) {

    super(options);

    this.height = options.height || 1;
    this.defaultHeight = .25;

		this.material = new THREE.MeshLambertMaterial({
  		color: 0x666666, 
  		transparent: false,
  		opacity: 1,
  		// side: THREE.DoubleSide,
  		blending: THREE.AdditiveBlending 
  	});

	}
 

  render () {

    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, this.defaultHeight * this.height, 1),
      this.material
    );

    this.mesh.castShadow = true;
    this.mesh.position.set(this.options.position.x, this.defaultHeight * this.height / 2, this.options.position.z);
    this.mesh.objectType = 'wall';

  }


  /**
   * Animate all the child elements of this level
   */
  animate (clock) {}

}