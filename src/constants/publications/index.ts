export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  presentationType: string;
  url: string;
  isFirstAuthor: boolean;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "注意機構における Attention Sink のバイアス項的解釈",
    authors:
      "大橋 諭貴, 木谷 頼斗, 佐藤 宏亮 (東北大), 高橋 良允 (東北大/理研), 鴨田 豪, 山本 悠士 (総研大/国語研), 塩野 大輝 (東北大), 坂口 慶祐 (東北大/理研), 小林 悟郎 (東北大)",
    venue: "言語処理学会第32回年次大会（NLP2026）",
    year: "2026",
    presentationType: "口頭発表・ポスター",
    url: "https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/B6-15.pdf",
    isFirstAuthor: true,
  },
  {
    title:
      "Attention SinkおよびMassive Activationの発生機序の分解",
    authors:
      "木谷 頼斗, 大橋 諭貴, 佐藤 宏亮 (東北大), 鴨田 豪 (総研大/国語研), 高橋 良允 (東北大/理研), 山本 悠士 (総研大/国語研), 塩野 大輝 (東北大), 坂口 慶祐 (東北大/理研), 小林 悟郎 (東北大)",
    venue: "言語処理学会第32回年次大会（NLP2026）",
    year: "2026",
    presentationType: "口頭発表（採択率4%）",
    url: "",
    isFirstAuthor: false,
  },
];
