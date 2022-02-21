import {SetStateFunction} from "@utils";

import {DarkRoundedItem} from "@components/DarkRoundedItem";

import {DropdownMenu, DropdownItem} from "@components/DropdownMenu";

import {BridgeDirections} from "../Directions";
import {Token} from "@synapseprotocol/sdk";

export interface TokenDropdownItem extends DropdownItem {
    token: Token,
}

interface TokenDropdownProps {
    tokens:      TokenDropdownItem[],
    selected:    TokenDropdownItem,
    setSelected: SetStateFunction<TokenDropdownItem>,
    direction:   BridgeDirections,
}

export default function TokenDropdown({tokens, direction, selected, setSelected}: TokenDropdownProps) {
    const title = direction === BridgeDirections.FROM ? "Source token" : "Destination token";

    return (
        <DarkRoundedItem>
            <DropdownMenu
                title={title}
                selectedItem={selected}
                setSelectedItem={setSelected}
                items={tokens}
            />
        </DarkRoundedItem>
    )
}