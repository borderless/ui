import * as React from "react";
import * as atoms from "@borderlesslabs/atoms";
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
      {Object.entries(atoms.spacingConfig).map(([key, value]) => (
        <ui.TableRow key={key}>
          <ui.TableCell>{key}</ui.TableCell>
          <ui.TableCell>{value}</ui.TableCell>
          <ui.TableCell>
            <ui.Box
              css={[
                atoms.w[(key as any) as keyof typeof atoms.spacingConfig],
                atoms.backgroundColor.gray5,
                atoms.h[4]
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
      atoms.inlineFlex,
      atoms.justifyCenter,
      atoms.itemsCenter,
      atoms.p[1],
      atoms.w[24],
      atoms.h[8]
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
    {Object.entries(atoms.colorConfig).map(([key, value]) => (
      <ColorBlock key={key} name={key} color={value} />
    ))}
  </ui.Box>
);
