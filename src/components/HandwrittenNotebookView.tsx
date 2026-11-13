import React, { useState, useEffect } from 'react';
import { CURRICULUM_MODULES, type CurriculumModulePackage } from '../data/curriculumNotesAudioVideo';
import { COMIC_BOOK_ISSUES } from '../data/comicBooks';
import { NotebookIdeaComicArtwork } from './NotebookIdeaComicArtwork';
import { Printer, CheckCircle2, HelpCircle, Sparkles, Bookmark, BookOpen, ChevronLeft, FileText, Layers } from 'lucide-react';
import { soundFx } from '../utils/audioEffects';

interface HandwrittenNotebookViewProps {
  initialModuleId?: number | 'ALL';
  onLaunchMission?: (missionId: string) => void;
  onOpenComic?: (issueId: string) => void;
}

export const HandwrittenNotebookView: React.FC<HandwrittenNotebookViewProps> = ({
  initialModuleId = 'ALL',
  onLaunchMission,
  onOpenComic,
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<number | 'ALL'>(initialModuleId);
  const [userFillIns, setUserFillIns] = useState<Record<string, string>>({});
  const [predictions, setPredictions] = useState<Record<number, string>>({});
  const [debriefs, setDebriefs] = useState<Record<number, string>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (initialModuleId !== undefined) {
      setSelectedModuleId(initialModuleId);
    }
  }, [initialModuleId]);

  const activeModId = typeof selectedModuleId === 'number' ? selectedModuleId : 1;
  const currentModule: CurriculumModulePackage =
    CURRICULUM_MODULES.find((m) => m.id === activeModId) || CURRICULUM_MODULES[0];
  const { notebook } = currentModule;
  const companionComic = typeof selectedModuleId === 'number' 
    ? COMIC_BOOK_ISSUES.find((c) => c.issueNumber === selectedModuleId)
    : undefined;

  // Load saved notebook entries from localStorage
  useEffect(() => {
    try {
      const savedFillIns = localStorage.getItem('astrocamp_notebook_fillins');
      if (savedFillIns) setUserFillIns(JSON.parse(savedFillIns));

      const savedPreds = localStorage.getItem('astrocamp_notebook_predictions');
      if (savedPreds) setPredictions(JSON.parse(savedPreds));

      const savedDebriefs = localStorage.getItem('astrocamp_notebook_debriefs');
      if (savedDebriefs) setDebriefs(JSON.parse(savedDebriefs));
    } catch {
      // ignore
    }
  }, []);

  const handleFillInChange = (ideaId: string, val: string) => {
    const updated = { ...userFillIns, [ideaId]: val };
    setUserFillIns(updated);
    try {
      localStorage.setItem('astrocamp_notebook_fillins', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handlePredictionChange = (val: string) => {
    const updated = { ...predictions, [activeModId]: val };
    setPredictions(updated);
    try {
      localStorage.setItem('astrocamp_notebook_predictions', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleDebriefChange = (val: string) => {
    const updated = { ...debriefs, [activeModId]: val };
    setDebriefs(updated);
    try {
      localStorage.setItem('astrocamp_notebook_debriefs', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const toggleHint = (ideaId: string) => {
    setShowHints((prev) => ({ ...prev, [ideaId]: !prev[ideaId] }));
    soundFx.playClick(600);
  };

  const handlePrint = () => {
    soundFx.playTelemetryChirp();
    window.print();
  };

  return (
    <div className="handwritten-notebook-wrapper">
      {/* ── TOP ACTION & MODULE SELECTOR BAR ────────────────────────────────── */}
      <div className="notebook-toolbar no-print">
        <div className="notebook-module-pills">
          <button
            onClick={() => {
              setSelectedModuleId('ALL');
              soundFx.playClick(750);
            }}
            className={`notebook-pill-btn ${selectedModuleId === 'ALL' ? 'active' : ''}`}
            style={{
              borderColor: selectedModuleId === 'ALL' ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)'
            }}
          >
            <Layers size={13} />
            <strong>ALL COMICS & NOTES (8)</strong>
          </button>

          {CURRICULUM_MODULES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => {
                setSelectedModuleId(mod.id);
                soundFx.playClick(750);
              }}
              className={`notebook-pill-btn ${mod.id === selectedModuleId ? 'active' : ''}`}
              style={{
                borderColor: mod.id === selectedModuleId ? mod.themeColor : 'rgba(255,255,255,0.1)'
              }}
            >
              <span>{mod.badge}</span>
              <strong>Mod {mod.id}</strong>
            </button>
          ))}
        </div>

        <div className="notebook-toolbar-actions">
          {selectedModuleId !== 'ALL' && (
            <button
              onClick={() => {
                soundFx.playClick(750);
                setSelectedModuleId('ALL');
              }}
              className="notebook-back-btn no-print"
              title="Return to All Comics & Modules Overview"
            >
              <ChevronLeft size={14} />
              <span>All Comics</span>
            </button>
          )}

          {onOpenComic && companionComic && (
            <button
              onClick={() => {
                soundFx.playClick(800);
                onOpenComic(companionComic.id);
              }}
              className="notebook-comic-btn"
              title={`Read companion comic: ${companionComic.title}`}
            >
              <BookOpen size={14} />
              <span>Read Comic #{companionComic.issueNumber}</span>
            </button>
          )}

          <button onClick={handlePrint} className="notebook-print-btn" title="Print this handwritten notebook sheet as a PDF">
            <Printer size={15} />
            <span>Print Student PDF</span>
          </button>

          {onLaunchMission && (
            <button
              onClick={() => onLaunchMission(`NASA-M00${activeModId}`)}
              className="notebook-launch-btn"
              style={{ background: currentModule.themeColor }}
            >
              <Sparkles size={14} />
              <span>Fly Sim Mission</span>
            </button>
          )}
        </div>
      </div>

      {/* ── CONDITIONAL RENDER: ALL COMICS GALLERY OR SINGLE NOTEBOOK PAGE ──── */}
      {selectedModuleId === 'ALL' ? (
        /* ── ALL COMICS & NOTEBOOKS GALLERY RACK ── */
        <div className="notebook-all-gallery-view">
          {/* Hero Banner */}
          <div className="notebook-all-header-banner">
            <div className="notebook-all-header-content">
              <div className="notebook-all-badge">
                <Sparkles size={14} />
                <span>OFFICIAL NASA STEM ARCHIVE · 8 GRAPHIC NOVELS & FIELD LOGS</span>
              </div>
              <h2 className="notebook-all-title">
                All NASA STEM Comics & Field Notebooks
              </h2>
              <p className="notebook-all-subtitle">
                Explore historic NASA breakthroughs across all 8 curriculum modules. 
                Click on any comic book cover below to enter its <strong>Handwritten Engineering Worksheet</strong>, draw scientific principles, make pre-flight predictions, and fly the mission!
              </p>
            </div>
          </div>

          {/* 8-Comic Grid Rack */}
          <div className="notebook-all-grid">
            {CURRICULUM_MODULES.map((mod) => {
              const comic = COMIC_BOOK_ISSUES.find((c) => c.issueNumber === mod.id);
              return (
                <div
                  key={mod.id}
                  className="notebook-all-card"
                  onClick={() => {
                    soundFx.playClick(850);
                    setSelectedModuleId(mod.id);
                  }}
                >
                  {/* Real Vintage Comic Cover */}
                  <div className="notebook-all-card-cover-wrap">
                    <img
                      src={`${import.meta.env.BASE_URL}comics/covers/cover_issue_${mod.id}.jpg`}
                      alt={comic?.title || mod.name}
                      className="notebook-all-cover-img"
                    />
                    <div className="notebook-all-cover-badges">
                      <span className="notebook-all-issue-tag">
                        ISSUE #{mod.id < 10 ? `0${mod.id}` : mod.id}
                      </span>
                      <span className="notebook-all-badge-pill">
                        {mod.badge}
                      </span>
                    </div>
                    <div className="notebook-all-hover-overlay">
                      <div className="notebook-all-hover-pill">
                        <FileText size={15} />
                        <span>Open Notes Sheet</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="notebook-all-card-body">
                    <div className="notebook-all-mission-label">
                      {mod.notebook.nasaMission}
                    </div>
                    <h3 className="notebook-all-card-title">
                      {comic?.title || mod.notebook.moduleTitle}
                    </h3>
                    <div className="notebook-all-card-sub">
                      {mod.notebook.subtitle}
                    </div>

                    <div className="notebook-all-card-q">
                      <Bookmark size={12} className="text-amber-400 shrink-0" />
                      <span>"{mod.notebook.bigQuestion}"</span>
                    </div>

                    <div className="notebook-all-ideas-pills">
                      {mod.notebook.keyIdeas.map((idea, i) => (
                        <span key={idea.id} className="notebook-all-idea-tag" title={idea.title}>
                          💡 #{i + 1} {idea.title.split('(')[0].trim()}
                        </span>
                      ))}
                    </div>

                    <div className="notebook-all-actions" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => {
                          soundFx.playClick(900);
                          setSelectedModuleId(mod.id);
                        }}
                        className="notebook-all-enter-btn"
                        style={{ background: mod.themeColor }}
                      >
                        <FileText size={14} />
                        <span>Enter Notes</span>
                      </button>

                      {onOpenComic && comic && (
                        <button
                          type="button"
                          onClick={() => {
                            soundFx.playClick(800);
                            onOpenComic(comic.id);
                          }}
                          className="notebook-all-read-comic-btn"
                          title="Read Graphic Novel"
                        >
                          <BookOpen size={14} />
                          <span>Comic</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* ── AUTHENTIC LINED/DOT-GRID PAPER NOTEBOOK PAGE ────────────────────── */
        <div className="notebook-sheet printable-paper">
          {/* Binder Ring Holes on the Left Margin */}
          <div className="notebook-binder-holes">
            <div className="binder-hole" />
            <div className="binder-hole" />
            <div className="binder-hole" />
          </div>

          {/* Paper Tape Corner / Paper Clip Decoration */}
          <div className="notebook-washi-tape" style={{ background: `${currentModule.themeColor}dd` }}>
            JR_ASTROCAMP · NASA STEM LOG
          </div>

          {/* Top Breadcrumb row */}
          <div className="notebook-breadcrumb-row no-print">
            <button
              type="button"
              onClick={() => {
                soundFx.playClick(750);
                setSelectedModuleId('ALL');
              }}
              className="notebook-back-breadcrumb-btn"
            >
              <ChevronLeft size={13} />
              <span>← All Comics & Notes</span>
            </button>
            <span className="notebook-handwritten-badge">{notebook.nasaMission}</span>
          </div>

          {/* Notebook Header */}
          <div className="notebook-header">
            <div className="notebook-meta-strip">
              <div className="notebook-field">
                <span className="notebook-field-label">STUDENT CADET:</span>
                <span className="notebook-field-val">____________________</span>
              </div>
              <div className="notebook-field">
                <span className="notebook-field-label">DATE / MISSION:</span>
                <span className="notebook-handwritten-badge">{notebook.nasaMission}</span>
              </div>
              <div className="notebook-field">
                <span className="notebook-field-label">LEVEL:</span>
                <span className="notebook-field-val">{notebook.gradeLevel}</span>
              </div>
            </div>

          <h2 className="notebook-title">
            📓 {notebook.moduleTitle}
          </h2>
          <div className="notebook-subtitle">
            ~ {notebook.subtitle} ~
          </div>
        </div>

        {/* ── COMPANION OFFICIAL REAL RETRO COMIC COVER SHOWCASE ─────────────── */}
        {companionComic && (
          <div className="notebook-comic-showcase-strip no-print">
            <div
              className="notebook-comic-thumb-card"
              onClick={() => {
                soundFx.playClick(900);
                if (onOpenComic) onOpenComic(companionComic.id);
              }}
              title={`Click to read Issue #${companionComic.issueNumber}: ${companionComic.title}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}comics/covers/cover_issue_${companionComic.issueNumber}.jpg`}
                alt={`${companionComic.title} Official Comic Cover`}
                className="notebook-comic-thumb-img"
              />
              <div className="notebook-comic-thumb-badge">
                <span>ISSUE #{companionComic.issueNumber}</span>
              </div>
              <div className="notebook-comic-thumb-overlay">
                <BookOpen size={16} />
                <span>READ COMIC</span>
              </div>
            </div>

            <div className="notebook-comic-info-col">
              <div className="notebook-comic-badge-row">
                <span className="notebook-comic-heroic-badge">💥 OFFICIAL RETRO GRAPHIC NOVEL</span>
                <span className="notebook-comic-mission-badge">{companionComic.nasaMissionTieIn}</span>
                <span className="notebook-comic-grade-badge">{companionComic.gradeLevel}</span>
              </div>
              <h3 className="notebook-comic-headline">
                {companionComic.title}: <span className="notebook-comic-headline-sub">{companionComic.subtitle}</span>
              </h3>
              <p className="notebook-comic-synopsis">
                {companionComic.synopsis}
              </p>
              <div className="notebook-comic-cta-row">
                {onOpenComic && (
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick(900);
                      onOpenComic(companionComic.id);
                    }}
                    className="notebook-comic-cta-btn"
                    style={{ background: currentModule.themeColor }}
                  >
                    <BookOpen size={15} />
                    <span>Open Graphic Novel (Issue #{companionComic.issueNumber})</span>
                  </button>
                )}
                <span className="notebook-comic-citation">
                  Curriculum Tie-In · Verified NASA Flight Archive
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── THE BIG QUESTION BOX (Highlighter Accent) ───────────────────────── */}
        <div className="notebook-big-question-box">
          <div className="notebook-big-q-tag">
            <Bookmark size={14} /> THE BIG QUESTION
          </div>
          <div className="notebook-big-q-text">
            "{notebook.bigQuestion}"
          </div>
        </div>

        {/* ── 3 KEY SCIENTIFIC IDEAS WITH DIAGRAMS & FILL-IN LINES ───────────── */}
        <div className="notebook-key-ideas-section">
          <div className="notebook-section-title">
            ✏️ Key Scientific Principles (Write Your Observations)
          </div>

          <div className="notebook-ideas-grid">
            {notebook.keyIdeas.map((idea, idx) => {
              const userVal = userFillIns[idea.id] || '';
              const isCorrect = userVal.trim().toLowerCase() === idea.correctAnswer.toLowerCase();
              const hasHint = showHints[idea.id];

              return (
                <div key={idea.id} className="notebook-idea-card">
                  <div className="notebook-idea-header">
                    <span className="notebook-idea-num">IDEA #{idx + 1}</span>
                    <h4 className="notebook-idea-title">{idea.title}</h4>
                  </div>

                  {/* Authentic Comic Style Illustration Panel */}
                  <div className="notebook-sketch-frame">
                    <NotebookIdeaComicArtwork 
                      sketchType={idea.sketchType} 
                      moduleId={selectedModuleId} 
                      ideaNumber={idx + 1} 
                    />
                  </div>

                  <p className="notebook-idea-desc">
                    {idea.explanation}
                  </p>

                  {/* Interactive Student Fill-In Line */}
                  <div className="notebook-fillin-container">
                    <label className="notebook-fillin-label">
                      <strong>Cadet Fill-in: </strong>
                      {idea.fillInPrompt.split('________')[0]}
                      <span className="notebook-input-underline-wrap">
                        <input
                          type="text"
                          value={userVal}
                          onChange={(e) => handleFillInChange(idea.id, e.target.value)}
                          placeholder="write answer..."
                          className={`notebook-handwritten-input ${userVal && isCorrect ? 'correct' : ''}`}
                        />
                        {userVal && isCorrect && (
                          <CheckCircle2 size={14} className="notebook-check-icon" />
                        )}
                      </span>
                      {idea.fillInPrompt.split('________')[1]}
                    </label>

                    <div className="notebook-hint-row no-print">
                      <button onClick={() => toggleHint(idea.id)} className="notebook-hint-btn">
                        <HelpCircle size={12} /> {hasHint ? 'Hide Hint' : 'Need a Hint?'}
                      </button>
                      {hasHint && (
                        <span className="notebook-hint-bubble">
                          💡 {idea.hint}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── TWO-COLUMN BOTTOM: PRE-FLIGHT PREDICTION & POST-FLIGHT DEBRIEF ─── */}
        <div className="notebook-flight-loop-row">
          {/* Pre-Flight Prediction Box */}
          <div className="notebook-loop-box prediction-box">
            <div className="notebook-loop-header">
              <span>🚀 1. MY PREDICTION (Before Flying)</span>
            </div>
            <div className="notebook-prompt-text">{notebook.predictionPrompt}</div>
            <textarea
              value={predictions[activeModId] || ''}
              onChange={(e) => handlePredictionChange(e.target.value)}
              placeholder="Write your hypothesis here before launching the simulator..."
              className="notebook-handwritten-textarea"
              rows={3}
            />
          </div>

          {/* Post-Flight Debrief Box */}
          <div className="notebook-loop-box debrief-box">
            <div className="notebook-loop-header">
              <span>🎯 2. MY FLIGHT DEBRIEF (After Flying)</span>
            </div>
            <div className="notebook-prompt-text">{notebook.debriefPrompt}</div>
            <textarea
              value={debriefs[activeModId] || ''}
              onChange={(e) => handleDebriefChange(e.target.value)}
              placeholder="Record your telemetry, fuel margin, and what actually happened..."
              className="notebook-handwritten-textarea"
              rows={3}
            />
          </div>
        </div>

        {/* ── VOCABULARY STRIP (Sticky Note Tape Style) ───────────────────────── */}
        <div className="notebook-vocab-strip">
          <div className="notebook-vocab-label">🏷️ CORE VOCABULARY:</div>
          <div className="notebook-vocab-tags">
            {notebook.vocabulary.map((v, i) => (
              <div key={i} className="notebook-vocab-tag" title={v.definition}>
                <strong>{v.term}</strong>
                <span className="notebook-vocab-def">: {v.definition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Citation */}
        <div className="notebook-footer-ref">
          <span>NASA Research Citation: {notebook.nasaCitation}</span>
          <span style={{ float: 'right' }}>Team Mysterio · Junior Astronaut STEM Curriculum</span>
        </div>
      </div>
      )}
    </div>
  );
};
