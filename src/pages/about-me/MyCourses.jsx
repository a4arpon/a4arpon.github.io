const MyCourses = () => {
  return (
    <div className="bg-base-300 bg-opacity-40 rounded-b-2xl p-3 lg:p-5">
      <h3 className="text-3xl text-center border-b-2 pb-2">
        Completed Courses
      </h3>
      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <a
          href="https://web.programming-hero.com/course-details"
          className="text-2xl"
          target="_blank"
          rel="noreferrer"
        >
          Complete Web Development Course With Jhankar Mahbub
        </a>
        <p className="lg:text-right">December 2022 - Present</p>
      </div>
    </div>
  )
}

export default MyCourses
