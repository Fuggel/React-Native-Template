import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchSpells } from "../services/spells";
import { Spell } from "../types/Spell";

export default function useSpells(params: {
    spellType: string;
}) {
    const [spells, setSpells] = useState<Spell[] | null>(null);

    const { data: spellsData, isLoading: loadingSpells, error: errorSpells } = useQuery({
        queryKey: ["spells", params.spellType],
        queryFn: () => fetchSpells({ type: params.spellType }),
        staleTime: Infinity,
    });

    useEffect(() => {
        if (spellsData) {
            setSpells(spellsData);
        }
    }, [spellsData]);

    return { spells, loadingSpells, errorSpells };
}