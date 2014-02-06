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
        $result = $Actor -> field('id,pic,name,description') -> order('sort ASC') -> select();
        $this -> assign('result', $result);
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
