import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quiz';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, Sparkles } from 'lucide-react';

export const QuizView: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-xs mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-md text-xs font-semibold text-blue-700 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            한글 실무 압축 스피드 퀴즈
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight break-keep">
            1페이지 압축 단축키 & 실무 지식 퀴즈
          </h2>
        </div>
        <div className="bg-gray-50 px-4 py-2 rounded-xl border border-gray-200 text-center shrink-0">
          <span className="text-[11px] text-gray-500 block">문항</span>
          <span className="text-base sm:text-lg font-bold font-mono text-gray-900">
            {isFinished ? QUIZ_QUESTIONS.length : currentIndex + 1} / {QUIZ_QUESTIONS.length}
          </span>
        </div>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 h-1.5 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-blue-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 block">
              문제 {currentIndex + 1}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === currentQuestion.correctIndex;
              let btnStyle = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                } else {
                  btnStyle = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-blue-50 border-blue-300 text-blue-900 font-semibold';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswerSubmitted}
                  className={`w-full text-left p-4 rounded-xl border transition-colors flex items-center justify-between text-sm cursor-pointer ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700 shrink-0">
                      {idx + 1}
                    </span>
                    <span>{option}</span>
                  </div>
                  {isAnswerSubmitted && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (shown after submit) */}
          {isAnswerSubmitted && (
            <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl mb-6 text-xs sm:text-sm text-blue-950 animate-in fade-in">
              <div className="font-semibold flex items-center gap-1.5 mb-1 text-blue-900">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>해설 및 실무 팁</span>
              </div>
              <p className="leading-relaxed text-gray-700">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Bottom Action Button */}
          <div className="flex justify-end">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors ${
                  selectedAnswer !== null
                    ? 'bg-gray-900 hover:bg-gray-800 text-white cursor-pointer'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                }`}
              >
                정답 확인하기
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>{currentIndex + 1 === QUIZ_QUESTIONS.length ? '결과 보기' : '다음 문제'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Result Card */
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-xs text-center">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-100">
            <Award className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">퀴즈 완료!</h3>
          <p className="text-gray-500 text-sm mb-6">
            아래한글 1페이지 압축 실전 지식 퀴즈를 모두 완료했습니다.
          </p>

          <div className="bg-gray-50 max-w-xs mx-auto p-4 rounded-xl border border-gray-200 mb-6">
            <div className="text-xs text-gray-500">최종 점수</div>
            <div className="text-3xl font-bold font-mono text-gray-900 mt-1">
              {score} / {QUIZ_QUESTIONS.length}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              정답률: {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-medium text-sm transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>퀴즈 다시 풀기</span>
          </button>
        </div>
      )}
    </div>
  );
};
