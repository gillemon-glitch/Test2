
export enum PageType {
  Intermezzo = 'INTERMEZZO',
  Bivio = 'BIVIO',
  Quest = 'QUEST',
  End = 'END',
}

export enum QuestType {
  Main = 'MAIN',
  Side = 'SIDE',
}

export interface Choice {
  text: string;
  nextPageId: string;
  isCorrect?: boolean;
  questType?: QuestType;
  sideQuestId?: string;
}

export interface BasePage {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  imageAlt: string;
}

export interface IntermezzoPage extends BasePage {
  type: PageType.Intermezzo;
  choice: {
    text: string;
    nextPageId: string;
  };
}

export interface BivioPage extends BasePage {
  type: PageType.Bivio;
  choices: Choice[];
}

export interface QuestPage extends BasePage {
  type: PageType.Quest;
  questType: QuestType;
  choices: Choice[];
  sideQuestId?: string;
}

export interface EndPage extends BasePage {
  type: PageType.End;
  choice: {
      text: string;
  };
}

export type GamePage = IntermezzoPage | BivioPage | QuestPage | EndPage;

export interface GameData {
  [key: string]: GamePage;
}

export interface GameState {
  currentPageId: string;
  score: number;
  playedSideQuests: Set<string>;
  esito?: {
    message: string;
    isCorrect: boolean;
  };
}
