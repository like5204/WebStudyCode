

type LinkedListNode<T> = {
	value:T,
	next: LinkedListNode<T>|null,
	prev?: LinkedListNode<T>|null
}|null;

//不能直接在type类型定义前面写导出
export default LinkedListNode;


