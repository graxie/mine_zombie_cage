exports.zombie_cage = function () {

/* box( type, width, height, depth) */

 /*left(2).back(2).up(1).box('101',1,3,4).right(1).fwd(3).box('101',2,3,1).
  back(3).box('101',2,3,1).right(2).box('101',1,3,4)*/
  
  left(2).back(2).box('101',1,3,4).fwd(4).turn().
box('101',1,3,4).fwd(4).turn().box('101',1,3,4).
fwd(4).turn().box('101',1,3,4).fwd(4)
  
  
  
  /* var z= box('101',1,3,4).fwd(4).turn(90).z*(4).up(3)box(block'101',3,1,3). */
  
}
