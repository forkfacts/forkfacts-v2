import { Block, Icon, Link, Navbar, Page, Panel } from "konsta/react";
import { MdClose } from "react-icons/md";
import React from "react";

interface MobilePanelProps {
  isOpen: boolean;
  onClick: (shouldOpen: boolean) => void;
}

export function MobilePanel({ isOpen, onClick }: MobilePanelProps) {
  return (
    <Panel side="left" opened={isOpen} onBackdropClick={() => onClick(false)}>
      <Page>
        <Navbar
          title="Left Panel"
          right={
            <Link navbar iconOnly onClick={() => onClick(false)}>
              <Icon material={<MdClose />} />
            </Link>
          }
        />
        <Block className="space-y-4">
          <p>Here comes left panel.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
            leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
            urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
            venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
            Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
            pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
            mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
            Suspendisse a faucibus lectus.
          </p>
        </Block>
      </Page>
    </Panel>
  );
}
