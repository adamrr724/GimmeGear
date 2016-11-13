export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('admin'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
