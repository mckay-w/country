import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../pages/navigationBar';

import '../style/article.css';

  // 假设有一个数组，包含了不同文章的内容
  export const articles = [
    {
      id: 1,
      title: "你好，大陈村",
      cover: "/dachencun/1.jpg",
      description:"三州同筑乡村梦，百年共络创业情”浙大暑期社会实践活动",
      author:"",
      content: [
        <h3> ——三州同筑乡村梦，百年共络创业情”浙大暑期社会实践活动</h3>,
        "8月1日上午，“三洲同筑乡村梦，百年共络创业情”暑期社会实践团的金华分队3人来到金华永康大陈村，围绕当地“农旅”特色，体验了当地优美风景与特色文化，与当地居民深入交流，对该村的发展历程进行深入考察。",
        <img src="/dachencun/1.jpg" alt="陈氏宗祠" className='article-image' />,
        "我们联系到在当地民宿工作的楼阿姨，请她带领我们参观大陈村。她向我们介绍，大陈村的发展离不开村长和书记的积极带头与无私奉献。当时，村长与书记注意到旅游业发展的契机，由村里出资租大巴，带领村民前去磐安、金华等旅游业发展较成熟的地区进行考察。宣传方面，最初采用登报宣传，后来村长和书记亲自到上海、江苏的旅行社进行宣传，开展合作，逐渐建立起好的口碑。加上网络不断发展，互联网宣传也成为了重要途径之一。",
        <img src="/dachencun/2.png" alt="picture" className='article-image' />,
        "走在大陈村中的小路上，地面是普通的石板或水泥，两边的房屋也是普通农村的平房模样，旧景更增添大陈村的韵味。几乎在每一个转交和交叉路口，我们都能看到有趣的“街角小品”。有一面墙上贴满了永康方言的标识牌，“礼归觅”的意思就是“回来没有”，“歇气”指的是“去哪里”，有趣的发音让我们感到新奇好玩。街角的房屋之间，红色的电话亭嵌在其中，成为一道靓丽的风景线。路边一辆有年代的摩托车竟也成为了一处小景点。在旁边休息老爷爷笑着告诉我们，“来这里玩的上海游客特别喜欢坐在摩托车上拍照。”",
        <img src="/dachencun/3.png" alt="picture" className='article-image' />,
        "随后，我们参观了未来田园、名医馆、大会堂等地点，在“猪栏咖啡”店中品尝了特色咖啡。我们深刻感受到大陈村的旅游业发展重视游客的精神消费需求，文创、艺术等内容是大陈旅游的特色品牌。",
        "在参观大陈村的过程中，楼阿姨告诉我们，大陈村发展后，当地的芋艿、桃子、橘子等农副产品不再需要运送到外地售卖，在当地就可以卖出很好的价格。其中，大陈芋艿最为出名。在大陈村村口，我们还发现了两个跟芋头一样的木偶，称为“粉粉”和“糯糯”，是村长吉祥物。除此之外，“芋见大陈”“芋见未来”“共同富芋”等谐音的运用都不断强化这一地域特色标志，让我们感到十分有趣。",
        <img src="/dachencun/4.png" alt="picture" className='article-image' />,
        "总结：大陈村的一日考察让我们深入了解一个普通村庄从贫穷走向富裕的探索之路，我们由衷地敬佩当地干部的长远目光与辛勤付出，称赞当地村民的智慧与韧性。考察的最后，我们与带路的楼阿姨在村口合影，用相机记录下这美好的一瞬。愿大陈村不断发展，向更加生态、美丽、富裕的乡村迈进！",
        
      ],
    },
    {
      id: 2,
      title: "敢为人先，敢于创新——泽国镇乡村共富之路",
      cover: "/zeguo/5.jpg",
      description:"以创新设计，推乡村发展",
      author:"",
      content: [
        <h3>以创新设计，推乡村发展</h3>,
        "2023年8月2日，浙江大学求是学院蓝田学园“三州同筑乡村梦，百年共络创业情”暑期社会实践团台州分队前往了浙江省台州市温岭市泽国镇前陈村，针对建筑学、城乡规划专业推动乡村可持续性发展这一主题展开调研。",
        "前陈村靠近泽国镇政府及广场，历经农村老自建房拆迁，余留了一大片空地，作为泽国镇中心地带，人流量大，周边商铺较多，活动较为丰富。在今年该处空地开始被建设利用，建设了公园与小吃街。",
        <img src="/zeguo/5.jpg" alt="picture" className='article-image' />,
        "方形空地东侧建设了儿童乐园，配备了大量儿童游乐设施，吸引家长带孩子来此处游玩，在一定程度上增加了人流量。而方形空地的剩余部分则是设置了露天餐厅、荷花池等系列功能景观设施，美化了周边环境，同时又保留了乡土气息。围绕方形场地设立了人行道，满足了村民以及各地居民走路散步或跑步健身的需求。",
        <img src="/zeguo/4.jpg" alt="餐厅夜景" className='article-image' />,
        "在方形场地的东北侧，通过统一风格的集装箱的造型排列堆叠，形成了一条独具特色的小吃街。集装箱式店铺的设计成本低但收益高，店铺间排列自由，移动方便，适应多种区域与地形，同时具有极富特色的外观与色彩搭配，形成了独特的景观。随着时间推移，该设计也可以根据具体情况进行店铺的增加与减少，有助于该地的可持续性发展。",
        <img src="/zeguo/8.jpg" alt="采访商家" className='article-image' />,
        "店家们热情的招待了我们，并耐心地回答了我们的问题。从采访中可知，一方面该处地段优越，人流量大，适合开设该类商铺，另一方面，政府对于商家给予了政策上的支持，向商家提供了免租金的店面，只需商家交押金便可供其使用，同时政府从商家的营业额中抽取部分提成，以此达成共赢的局面。",
        <img src="/zeguo/9.jpg" alt="餐厅夜景" className='article-image' />,
        <h4>以创新精神，迎创业挑战</h4>,
        "2023年8月2日，浙江大学求是学院蓝田学园 “三州同筑乡村梦，百年共络创业情”暑期社会实践团台州分队前往乡村创业者——叶先生的办公室，对其进行采访，收集其成功的创业经验。",
        <img src="/zeguo/7.jpg" alt="picture" className='article-image' />,
        "叶先生在过去的十年里，创办了一家名为DECAPOWER INDUSTRY产品营销型公司，专注于细分产品领域的跨境零售，目前已拥有多家主流平台的线上商铺，阿里速卖通、俄罗斯本地电商OZON、亚马逊AMAZON等等。我从事外贸行业已经超过15年，有着丰富国际市场营销经验，擅长找准市场机会，通过设计差异化产品，打造出具有竞争力的产品和服务。",
        "叶先生对我们进行了热情的招待，并详细介绍了他创业过程中的种种细节，希望他的创业经验可以帮助到更多乡村创业者以及大学生创业者。",
        "在谈及创业的初心时，他表示主要的原因他希望能够实现自己的梦想和追求。创业给了他一个机会去创造自己的事业，实现自己的价值。",
        "创业的过程中，叶先生也遇到了许多困难和挑战，其中最大的困难就是资金问题，通过合作、贷款等方式最终也得以成功解决。同时市场竞争也是一个巨大的挑战，叶先生通过自身不断的学习与研究，才得以成功应对。",
        "而谈及目前乡村的创业环境，叶先生表示现在的创业环境具有一定的挑战和机遇。创业环境变得更加开放和包容，社会对创业者的认可度也在不断提高，科技的迅猛发展以及消费升级也为创业者创造了更多商机。但与此同时创业过程中也存在竞争压力大、融资难、部分行业准入门槛高等一些列挑战，希望政府和民众可以共同努力，让创业环境越来越好。",
        "在采访的最后，叶先生也对想要进行创业的大学生提出了一些建议：1.要有一个明确的目标和计划。2.要勇于面对困难和挑战。3.要不断学习和提升自己的能力。",
        "此次采访，让成员们受益匪浅，我们也希望叶先生所说的经验可以让更多创业者受益。",
        <img src="/zeguo/2.jpg" alt="picture" className='article-image' />,
        
      ],
    },
    {
      id: 3,
      title: "记玉鸟集实践",
      cover: "/yuniao/1.jpg",
      description:"城乡建设的先行者，美好生活的场景师",
      author:"徐佳妮(图文）",
      content: [
        <h3> ——城乡建设的先行者，美好生活的场景师</h3>,
        "2023年8月4日下午，浙江大学求是学院蓝田学园赴浙江省金华永康、台州温岭、杭州余杭区“三州同筑乡村梦，百年共络创业情”暑期社会实践团杭州分团三位成员前往玉鸟集和良渚文化村参观并深入体会这一乡村振兴的新模式，它们实践着城镇化建设的先行探索。",
        "玉鸟集是良渚文化村的最后一块版图，是一个集文化、艺术、生活、轻度假于一体的商业街区。在玉鸟集中，我们看到了许多非常具有现代气息的商业IP的入驻，让这片历史悠久的土地散发出了新的光彩。同时玉鸟集也承载了许多艺术和文化价值，在日常生活的场景下，延伸出设计与空间的体验。",
        <img src="/yuniao/1.jpg" alt="picture" className='article-image' />,
        "其中，在建筑大师柳亦春作品“大谷仓”内，引进了由许知远老师创办的超大文艺书店单向空间，整体打造了集图书、展览、文创、咖啡、餐酒吧为一体的社区复合文化空间。",
        <img src="/yuniao/2.jpg" alt="picture" className='article-image' />,
        "但玉鸟集不仅仅是一个商业街区，它承载了许多青年创业者和青年艺术家的理想与生活。在实践的过程中，我们也碰到了不少成功的典范，并对他们的创业故事和创业经验进行了简单的采访。",
        <img src="/yuniao/3.jpg" alt="picture" className='article-image' />,
        "林不染的面包店就是其中一员。店主林先生从他的师傅那里传承了地道的工匠乡村面包手艺。面包店凭借地道的法式制作工艺和对品质的追求吸引了一大波的客户，但林先生并没有止步于此，林不染的面包店就是他新的尝试。",
        "林不染的面包店是林先生面包店的支线，一家专门为小朋友打造的日式面包店。在玉鸟集的选址也是一个非常合适的选择，与玉鸟集艺术和生活的追求十分匹配。",
        "另一家叫做挑时的店也让我印象非常深刻。我们在现场与店员进行交流，了解了品牌的创始发展过程、品牌理念和在玉鸟集选址的原因。",
        <img src="/yuniao/4.jpg" alt="picture" className='article-image' />,
        "“挑一两段时光，从自身需要做设计，吸引有同样需要的人，这就是挑时tells的含义。”",
        "从店里很多的家具中可以看出他们从中国传统文化中寻找设计灵感的创作方式。",
        <img src="/yuniao/5.jpg" alt="picture" className='article-image' />,
        "市面上的中式、新中式的家具产品很多，但挑时的作品却兼具古韵和当代性，有令人会心一笑的文化精髓。与玉鸟集传承良渚文化、亦获新生的建设理念不谋而合。",
        "玉鸟集给予了这些品牌一个发展的场所，而这些品牌的设计理念和发展塑造了玉鸟集的气质，二者相辅相成。",
        "玉鸟集的成功落地，也让我们看到了乡村振兴新的可能性。",
      ],
    },
  ];

function Catalog(){
    return(
        <ul className="vertical-nav">
        {
            articles.map((item)=>(
                <li><a href={"/articles/"+String(item.id)}>{item.title}</a></li>
                ))
        }
        </ul>

    );
};


const Article = () => {
  const { id } = useParams();



  // 根据 id 查找匹配的文章对象
  const selectedArticle = articles.find(article => article.id === parseInt(id));

  return (
    <div>
        <NavigationBar/>
        <br/>
        <div style={{ display: 'flex' }}>
            
            <div className="article-container">
                {selectedArticle ? (
                    <div>
                    <h2>{selectedArticle.title}</h2>
                    {selectedArticle.content.map((element, index) => (
                        <div key={index} className=''>
                        {typeof element === 'string' ? <p>{element}</p> : element}
                        </div>
                    ))}
                    {/* 添加其他内容 */}
                    </div>
                ) : (
                    <p>找不到对应的文章。</p>
                )}
            </div>
            <Catalog/>
        </div>
    </div>
  );
};

export default Article;