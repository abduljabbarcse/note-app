'use client';
import NotesList from '@/components/NotesComponents/NotesList';
import { fetchNotesAsync } from '@/lib/features/noteThunks';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react';


export default function Home() {
  const dispatch = useAppDispatch();
  const { notes, status, error } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(fetchNotesAsync());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <main>
      <NotesList notes={notes} />
    </main>
  );
}
