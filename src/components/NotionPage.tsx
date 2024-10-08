"use client"; // This makes this file a client component

import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css';

export default function NotionPage({ recordMap }) {
    return (
        <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
        />
    );
}
