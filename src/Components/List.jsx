import Video from "./Video";
import Article from "./Article";
import withDataHighlight from "./HOCs/DataHighlight";
import uniqid from "uniqid";

const ArticleHighlight = withDataHighlight(Article);
const VideoHighlight = withDataHighlight(Video);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoHighlight key={uniqid()} {...item} />
                );

            case 'article':
                return (
                    <ArticleHighlight key={uniqid()} {...item} />
                );
        }
    });
}