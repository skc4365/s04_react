import Book from './Book'

function Library() {
    return (
        <>
            <Book name={"오늘222 만나는 리액트"} total={200}></Book>
            <Book name={"오늘222 만나는 Node"} total={50}></Book>
            <Book name={"오늘222 만나는 DOS"} total={1000}></Book>
        </>
    )
}
export default Library