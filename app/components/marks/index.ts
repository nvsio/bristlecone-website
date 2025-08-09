import AnthropicMark from "./AnthropicMark";
import OpenAIMark from "./OpenAIMark";
import CircleMark from "./CircleMark";
import VardaMark from "./VardaMark";
import RainAIMark from "./RainAIMark";
import NovaMark from "./NovaMark";
import DharmaMark from "./DharmaMark";
import PoparazziMark from "./PoparazziMark";
import JoinMark from "./JoinMark";

export const marks = {
  Anthropic: AnthropicMark,
  OpenAI: OpenAIMark,
  Circle: CircleMark,
  Varda: VardaMark,
  "Rain AI": RainAIMark,
  Nova: NovaMark,
  Dharma: DharmaMark,
  Poparazzi: PoparazziMark,
  Join: JoinMark,
} as const;

export type MarkKey = keyof typeof marks;
