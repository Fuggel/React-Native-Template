import axios from "axios";
import { WIZARDING_WORLD_API_URL } from "../constants";
import { Spell } from "../types/Spell";

export async function fetchSpells(
    params: {
        type: string;
    }
): Promise<Spell[]> {
    try {
        const queryParams = new URLSearchParams();
        queryParams.append("type", params.type);

        const url = `${WIZARDING_WORLD_API_URL}/Spells?${queryParams.toString()}`;
        console.log(url);
        const response = await axios.get(url);


        return response.data;
    } catch (error) {
        console.log(`Error fetching spells: ${error}`);
        return [];
    }
}