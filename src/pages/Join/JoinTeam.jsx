import Button from "../../components/Button";


const JoinTeam = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-[20px]">
      <header>
        <h5 className="text-[#13BA00] text-[14px]">TCU 2.0</h5>
        <h2 className="text-xl font-bold text-[#fff]">Join Teams</h2>
      </header>

      <section className="">
        <div className="text-[#fff] flex flex-col gap-9 my-8 text-lg font-light">
          <p >
            Accumulate real-world job knowledge, hone our technical and
            interpersonal capabilities, and develop Your personal portfolio.
          </p>

          <p>
            We have a space for you to collaborate and upskill. Join our
            community to be allocated to a project team at TCU 2.0
          </p>
        </div>

        <Button />

        <div className="mt-[30px]">
            <h3 className="text-[#fff]">Time Left to join TCU 2.0</h3>
        </div>
      </section>
    </div>
  );
};

export default JoinTeam;
