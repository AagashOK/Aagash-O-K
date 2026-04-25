import React from "react";
import { Link } from "react-router-dom";

const HushhHackathonPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-24 md:px-10">
        <p className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
          Hushh Hackathon
        </p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Build the future of privacy-first intelligence
        </h1>
        <p className="max-w-2xl text-base text-slate-300 md:text-lg">
          The hackathon route is now live and routed correctly. Event timelines,
          challenge details, and participation instructions can be published here.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
          >
            Back to Home
          </Link>
          <Link
            to="/community"
            className="rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-400 hover:bg-slate-900"
          >
            Open Community
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HushhHackathonPage;
