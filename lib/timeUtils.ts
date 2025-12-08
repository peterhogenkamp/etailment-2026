// lib/timeUtils.ts
// Centralized time formatting utilities (based on manifold-publish logic)

export interface TimeDisplayResult {
  display: string;
  tooltip: string;
}

function isToday(date: Date): boolean {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

function formatDateTimeFull(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function formatTimeDisplay(publishedAt: string): TimeDisplayResult {
  if (!publishedAt || publishedAt.trim() === '') {
    return { display: '', tooltip: '' };
  }

  const publishedDate = new Date(publishedAt);
  if (isNaN(publishedDate.getTime())) {
    return { display: '', tooltip: '' };
  }

  const now = new Date();
  const diffMs = now.getTime() - publishedDate.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);

  let display: string;
  
  // Logic for display format
  if (diffMinutes < 60) {
    // Under 1 hour: show relative time
    display = `${diffMinutes} min. ago`;
  } else if (diffHours < 24 && isToday(publishedDate)) {
    // Today but over 1 hour: show HH:MM
    display = publishedDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  } else {
    // Not today: show DD.MM.YY HH:MM
    display = formatDateTimeFull(publishedDate);
  }

  // Tooltip with full information
  const publishedFull = formatDateTimeFull(publishedDate);
  const tooltip = `Published: ${publishedFull}`;

  return { display, tooltip };
}

export function formatDateFull(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return '';
  }
  return formatDateTimeFull(date);
}

export function formatDateLong(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return '';
  }
  return date.toLocaleDateString('de-DE', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return '';
  }
  return date.toLocaleDateString('de-DE', { 
    day: '2-digit', 
    month: '2-digit' 
  });
}

