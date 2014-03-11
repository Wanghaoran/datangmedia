<?php
class IndexAction extends Action
{
    public function index()
    {
        $this->display();
    }

    public function show()
    {
        $this->display();
    }

    public function artists()
    {
        $this->display();
    }

    public function actor(){
        $Actor = M('Actor');
        $result_man = $Actor -> field('id,pic,name,description') -> where('sex=1') -> order('sort ASC') -> select();
        $result_woman = $Actor -> field('id,pic,name,description') -> where('sex=2') -> order('sort ASC') -> select();
        $this -> assign('result_man', $result_man);
        $this -> assign('result_woman', $result_woman);
        $this -> display();
    }

    public function actorinfo(){
        $Actor = M('Actor');
        $result = $Actor -> find($this -> _get('id', 'intval'));
        $this -> assign('result', $result);
        $this -> display();
    }

    public function great(){
        $this -> display();
    }

}
