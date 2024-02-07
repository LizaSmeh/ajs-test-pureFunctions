export default function pureFunctions(playerObject) {
  let stripHealthe = '';
  if (playerObject.health > 50) {
    stripHealthe = 'healthy';
  } if (playerObject.health >= 15 && playerObject.health <= 50) {
    stripHealthe = 'wounded';
  } if (playerObject.health < 15) {
    stripHealthe = 'critical';
  }
  return stripHealthe;
}
