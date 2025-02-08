import type { Meta, StoryObj } from "@storybook/react";
import SvgIcon from "./SvgIcon";
import { PictureSVG } from "../../../icons";
import "../../../../app/style/index.css";


const meta: Meta<typeof SvgIcon> = {
   title: 'Shared/SvgIcon',
   component: SvgIcon,
   tags: ['autodigs'],
};

export default meta;


type Story = StoryObj<typeof SvgIcon>;

export const Test: Story = {
   args: {
      children: <PictureSVG />,
      boxClass: '',
      iconSize: 16,
   }
}