export interface IAzkarList {
    title: string;
    category: string;
    content: IAzkarDetails[],
}

export interface IAzkarDetails{
    zekr: string;
    repeat: number;
    originalRepeat: number;
    isQuranVerse: boolean;
    bless: string;
}