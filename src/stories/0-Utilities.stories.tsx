import * as React from "react";
import * as ui from "../index";

export default {
  title: "Utilities"
};

export const spacing = () => (
  <ui.Table>
    <ui.TableHead>
      <ui.TableRow>
        <ui.TableHeadCell>Index</ui.TableHeadCell>
        <ui.TableHeadCell>Size</ui.TableHeadCell>
        <ui.TableHeadCell>Example</ui.TableHeadCell>
      </ui.TableRow>
    </ui.TableHead>
    <ui.TableBody>
      {Object.entries(ui.spacingConfig).map(([key, value]) => (
        <ui.TableRow key={key}>
          <ui.TableCell>{key}</ui.TableCell>
          <ui.TableCell>{value}</ui.TableCell>
          <ui.TableCell>
            <ui.Box
              css={[
                ui.w[(key as any) as keyof typeof ui.spacingConfig],
                ui.backgroundColor.gray5,
                ui.h[4]
              ]}
            />
          </ui.TableCell>
        </ui.TableRow>
      ))}
    </ui.TableBody>
  </ui.Table>
);

const ColorBlock = ({ name, color }: { name: string; color: string }) => (
  <ui.Box
    css={[
      ui.inlineFlex,
      ui.justifyCenter,
      ui.itemsCenter,
      ui.p[1],
      ui.w[24],
      ui.h[8]
    ]}
    style={{
      backgroundColor: color
    }}
  >
    {name}
  </ui.Box>
);

export const colors = () => (
  <ui.Box>
    {Object.entries(ui.colors).map(([key, value]) => (
      <ColorBlock key={key} name={key} color={value} />
    ))}
  </ui.Box>
);
