import type { Meta, StoryObj } from "@storybook/react";
import SvgIcon from "./SvgIcon";
import { PictureSVG } from "../../../icons";
import "../../../../app/style/index.css";


const meta = {
   title: 'Shared/SvgIcon',
   component: SvgIcon,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: {
      boxClass: '',
   }
} satisfies Meta<typeof SvgIcon>;

export default meta;


type Story = StoryObj<typeof meta>;

export const Test: Story = {
   args: {
      children: <PictureSVG />,
      iconSize: 16,
   }
}