function Prize({goodCount, badCount}) {
  return (
    <>
      { goodCount >= 10 && <p>good 10を達成しました🎉</p>}
      { badCount >= 10 && <p>bad 10を達成しました😈</p>}
    </>
  );  
}

export default Prize;